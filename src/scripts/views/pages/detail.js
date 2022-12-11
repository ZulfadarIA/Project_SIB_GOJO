import DataSource from '../../data/gojo-api-source';
import { createItemTemplate } from '../templates/template-creator';

const DetailJobs = {
  async render() {
    return `
    <main>
       
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

export default DetailJobs;
