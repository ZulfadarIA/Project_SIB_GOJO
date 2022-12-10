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
                    <input type="text" name="search" class="form-control search-input" placeholder="Search Jobs" autofocus="autofocus" autocomplete="off">
                    <span class="input-group-btn">
                        <button class="btn btn-search">
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
    apis.forEach((data) => {
      restaurantContent.innerHTML += createItemTemplate(data);
    });
  },
};

export default Jobs;
