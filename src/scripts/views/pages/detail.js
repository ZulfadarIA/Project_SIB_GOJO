import UrlParser from '../../routes/url-parser';
import DataSource from '../../data/gojo-api-source';
import { createDetailTemplate } from '../templates/template-creator';

const DetailJobs = {
  async render() {
    return `
    <main>
       <div id="detail" class="container detail">
       </div>
    </main>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await DataSource.detailData(url.id);
    const dataContent = document.querySelector('#detail');
    dataContent.innerHTML = createDetailTemplate(data);
  },
};

export default DetailJobs;
