const SavedJobs = {
  async render() {
    return `
    <main>
        <!-- joblist start -->
        <div class="container justify-content-center">
            <h3 class="joblist-title">Saved Job list</h3>
            <div class="row post-item" id="joblist">
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
    </main>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default SavedJobs;
