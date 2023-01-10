import DataSource from '../../data/gojo-api-source';
import { createItemTemplate } from '../templates/template-creator';

const Jobs = {
  async render() {
    return `
    <main>
        <!-- Seacrh bar start -->
        <div class="search-bar">
            <div class="col-md-6 col-lg-6 col-11 mx-auto my-auto search-box">
                <div class="input-group form-container">
                    <input type="text" id="search" name="search" class="form-control search-input" placeholder="Search Jobs" autofocus="autofocus" autocomplete="off">
                    <span class="input-group-btn">
                        <button id="button" class="btn btn-search">
                            <h4>Search</h4>
                        </button>
                    </span>
                </div>
            </div>
        </div>
        <!-- End of Search bar -->
        <!-- joblist start -->
        <div class="container justify-content-center">
            <h3 class="joblist-title">Job list</h3>
            <div id="joblist" class="row post-item">
                
            </div>
        </div>
        <!-- End of joblist -->
    </main>
      `;
  },

  async afterRender() {
    const apis = await DataSource.dataList();
    const restaurantContent = document.querySelector('#joblist');
    const button = document.querySelector('#button');

    const showUser = (arr) => {
      let output = '';

      arr.forEach((data) => (output += createItemTemplate(data)));
      restaurantContent.innerHTML = output;
    };

    button.addEventListener('click', () => {
      const iptSearch = document.querySelector('#search');
      const element = iptSearch.value.toLowerCase();
      const newUser = apis.filter((user) => user.title.toLowerCase().includes(element));

      showUser(newUser);
    });

    showUser(apis);
  },
};

export default Jobs;
