const Home = {
  async render() {
    return `
    <!-- Hero carousel start-->
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../image/jumbotron.jpg" class="d-block w-100 hero" alt="...">
            <div class="carousel-caption">
              <h5>Golek Kerjo</h5>
              <p>Best Website for Finding Job</p>
              <p><a href="#/jobs" class="btn mulai-btn mt-3 hero">Cari Lowongan</a></p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../image/jumbotron_2.png" class="d-block w-100 hero" alt="...">
            <div class="carousel-caption">
              <h5>Golek Kerjo</h5>
              <p>Best Website for Finding Job</p>
              <p><a href="#/jobs" class="btn mulai-btn mt-3">Cari Lowongan</a></p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../image/jumnbtron_3.png" class="d-block w-100" alt="...">
            <div class="carousel-caption">
                <h5>Golek Kerjo</h5>
                <p>Best Website for Finding Job</p>
                <p><a href="#/jobs" class="btn mulai-btn mt-3">Cari Lowongan</a></p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
    </div>
    <!--End of Hero carousel-->
    <main>
        <!-- About GOJO section -->
        <section id="about-gojo" class="about section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-12">
                        <div class="about-img">
                            <img src="../image/logo-gojo.png" alt="" class="img-fluid">
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-12 ps-lg-5 mt-md-5">
                        <div class="about-text">
                            <h2>GOJO memudahkan anda untuk mencari kerja sesuai dengan harapan Anda</h2>
                            <p>GOJO merupakan aplikasi job portal yang memmudahkan anda untuk mencari
                            pekerjaan sesuai dengan lokasi, gaji, dan durasi jam kerja yang sesuai dengan yang anda inginkan </p>
                            <a href="#" class="btn btn-learnmore">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End of About GOJO section -->
        <!-- filter by catagory start-->
        <section id="catagories-filter" class="catagories-filter section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-header text-center pb-5">
                            <h2>Jobs Catagory</h2>
                            <p>Cari lowongan pekerjaan berdasarkan kategori</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-12 col-lg-4">
                        <div class="card text-wite text-center catagory-item pb-2">
                            <div class="card-body">
                                <i class="bi bi-briefcase-fill"></i>
                                <h3 class="card-title">Fulltime Job</h3>
                                <p>Cari lowongan pekerjaan Penuh waktu</p>
                                <button class="btn btn-primary text-light">Go</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-12 col-lg-4">
                        <div class="card text-wite text-center catagory-item pb-2">
                            <div class="card-body">
                                <i class="bi bi-briefcase-fill"></i>
                                <h3 class="card-title">Freelance</h3>
                                <p>Cari lowongan pekerjaan paruh waktu</p>
                                <button class="btn btn-primary text-light">Go</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-12 col-lg-4">
                        <div class="card text-wite text-center catagory-item pb-2">
                            <div class="card-body">
                                <i class="bi bi-briefcase-fill"></i>
                                <h3 class="card-title">Internship</h3>
                                <p>Cari lowongan magang/internship</p>
                                <button class="btn btn-primary text-light">Go</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End of filter by catagory -->
        <!-- Seacrh bar start -->
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
       <!-- End of Search bar -->
       <!-- joblist start -->
       <div class="container justify-content-center" id="joblist">
        <h3 class="joblist-title">Job list</h3>
        <div class="row post-item">
          <div class="col-12 col-md-6 col-lg-4 my-3 justify-content-center">
            <div class="card shadow" style="width: 18rem;">
              <img src="../image/loker.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h3 class="card-title">PT sejahtera</h3>
                <h4 class="office-loc">Jakarta Barat</h4>
                <h5 class="jobdesk">Jobdesk: <span> Software Engineer</span></h5>
                <h5 class="category">Category:<span> Full-time</span></h5>
                <!-- <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic ad 
                  neque omnis adipisci eveniet minima dolores explicabo recusandae dicta est, officiis 
                  similique magni aspernatur aliquid fugiat accusantium, sint ratione.</p> -->
                <a href="#" class="btn apply-btn text-white">Kirim Lamaran</a>
                <div class="saved-job"></div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 my-3 justify-content-center">
            <div class="card shadow" style="width: 18rem;">
              <img src="../image/loker.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h3 class="card-title">PT sejahtera</h3>
                <h4 class="office-loc">Jakarta Barat</h4>
                <h5 class="jobdesk">Jobdesk: <span> Software Engineer</span></h5>
                <h5 class="category">Category:<span> Full-time</span></h5>
                <!-- <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic ad 
                  neque omnis adipisci eveniet minima dolores explicabo recusandae dicta est, officiis 
                  similique magni aspernatur aliquid fugiat accusantium, sint ratione.</p> -->
                <a href="#" class="btn apply-btn text-white">Kirim Lamaran</a>
                <div class="saved-job"></div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 my-3 justify-content-center">
            <div class="card shadow" style="width: 18rem;">
              <img src="../image/loker.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h3 class="card-title">PT sejahtera</h3>
                <h4 class="office-loc">Jakarta Barat</h4>
                <h5 class="jobdesk">Jobdesk: <span> Software Engineer</span></h5>
                <h5 class="category">Category:<span> Full-time</span></h5>
                <!-- <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic ad 
                  neque omnis adipisci eveniet minima dolores explicabo recusandae dicta est, officiis 
                  similique magni aspernatur aliquid fugiat accusantium, sint ratione.</p> -->
                <a href="#" class="btn apply-btn text-white">Kirim Lamaran</a>
                <div class="saved-job"></div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 my-3 justify-content-center">
            <div class="card shadow" style="width: 18rem;">
              <img src="../image/loker.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h3 class="card-title">PT sejahtera</h3>
                <h4 class="office-loc">Jakarta Barat</h4>
                <h5 class="jobdesk">Jobdesk: <span> Software Engineer</span></h5>
                <h5 class="category">Category:<span> Full-time</span></h5>
                <!-- <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic ad 
                  neque omnis adipisci eveniet minima dolores explicabo recusandae dicta est, officiis 
                  similique magni aspernatur aliquid fugiat accusantium, sint ratione.</p> -->
                <a href="#" class="btn apply-btn text-white">Kirim Lamaran</a>
                <div class="saved-job"></div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 my-3 justify-content-center">
            <div class="card shadow" style="width: 18rem;">
              <img src="../image/loker.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h3 class="card-title">PT sejahtera</h3>
                <h4 class="office-loc">Jakarta Barat</h4>
                <h5 class="jobdesk">Jobdesk: <span> Software Engineer</span></h5>
                <h5 class="category">Category:<span> Full-time</span></h5>
                <!-- <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic ad 
                  neque omnis adipisci eveniet minima dolores explicabo recusandae dicta est, officiis 
                  similique magni aspernatur aliquid fugiat accusantium, sint ratione.</p> -->
                <a href="#" class="btn apply-btn text-white">Kirim Lamaran</a>
                <div class="saved-job"></div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 my-3 justify-content-center">
            <div class="card shadow" style="width: 18rem;">
              <img src="../image/loker.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h3 class="card-title">PT sejahtera</h3>
                <h4 class="office-loc">Jakarta Barat</h4>
                <h5 class="jobdesk">Jobdesk: <span> Software Engineer</span></h5>
                <h5 class="category">Category:<span> Full-time</span></h5>
                <!-- <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic ad 
                  neque omnis adipisci eveniet minima dolores explicabo recusandae dicta est, officiis 
                  similique magni aspernatur aliquid fugiat accusantium, sint ratione.</p> -->
                <a href="#" class="btn apply-btn text-white">Kirim Lamaran</a>
                <div class="saved-job"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <!-- End of joblist -->
       <!-- About us start -->
      <div class="container about-us-container" id="about_us">
        <div class="row">
          <div class="col-md-12">
              <div class="section-header text-center pb-5">
                  <h2 my-1 text-light>About Us</h2>
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
    </div>
    </main>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
