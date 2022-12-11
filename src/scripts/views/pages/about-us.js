import { createAboutTemplate } from '../templates/template-creator';

const AboutUs = {
  async render() {
    return `
      <main>
      <!-- About us start -->
      <div class="container about-us-container" id="about_us">
        
        </div>
        <!-- End of about us -->
      </main>
        `;
  },

  async afterRender() {
    const aboutContent = document.querySelector('#about_us');
    aboutContent.innerHTML = createAboutTemplate();
  },
};

export default AboutUs;
