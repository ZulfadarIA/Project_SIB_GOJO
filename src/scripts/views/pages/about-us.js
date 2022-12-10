const AboutUs = {
  async render() {
    return `
      <main>
      <!-- About us start -->
      <div class="container about-us-container" id="about_us">
        <div class="row">
          <div class="col-md-12">
              <div class="section-header text-center pb-5">
                  <h2 my-1 text-white>About Us</h2>
              </div>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-lg-5 mx-auto distance-1">
            <div class="card shadow mx-auto" style="max-width: 23rem;">
              <img class="rounded-circle mx-auto" src="../image/Zulfadar_profile.jpg" alt="Generic placeholder image" width="140" height="140">
              <div class="card-body">
                <h2>Zulfadar Indaka Alkaf</h2>
                <p>Front End & UI Designer</p>
                <p><a class="btn btn-secondary " href="https://www.linkedin.com/in/zulfadar-indaka-alkaf-097b82255/" role="button">View details »</a></p>
              </div>
            </div>
          </div>
          <div class="col-lg-5 mx-auto distance-1">
            <div class="card shadow mx-auto" style="max-width: 23rem;">
              <img class="rounded-circle mx-auto" src="../image/auf_profile.png" alt="Generic placeholder image" width="140" height="140">
              <div class="card-body">
                <h2>M. Rahadian Abdurrahman’auf All-Firdausy</h2>
                <p>Front End</p>
                <p><a class="btn btn-secondary " href="https://www.linkedin.com/in/abdurrahman-auf-569872244/" role="button">View details »</a></p>
              </div>
            </div>
          </div>
          <div class="col-lg-5 mx-auto distance-1">
            <div class="card shadow mx-auto" style="max-width: 23rem;">
              <img class="rounded-circle mx-auto" src="../image/galuh_profile.jpg" alt="Generic placeholder image" width="140" height="140">
              <div class="card-body">
                <h2>Galuh Widy Nugroho</h2>
                <p>Front End</p>
                <p><a class="btn btn-secondary " href="https://www.linkedin.com/in/galuhwidynugroho/" role="button">View details »</a></p>
              </div>
            </div>
          </div>
          <div class="col-lg-5 mx-auto distance-1">
            <div class="card shadow mx-auto" style="max-width: 23rem;">
              <img class="rounded-circle mx-auto" src="../image/faiz_profile.jpeg" alt="Generic placeholder image" width="140" height="140">
              <div class="card-body">
                <h2>Faiz Gunawan</h2>
                <p>Front End</p>
                <p><a class="btn btn-secondary " href="https://www.linkedin.com/in/faiz-gunawan/" role="button">View details »</a></p>
              </div>
            </div>
          </div>
        </div>
        <!-- End of about us -->
      </main>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default AboutUs;
