const createDetailTemplate = (data) => `
  <div class="restaurant_card">
    <p>${data.title}</p>
  </div>
`;

const createItemTemplate = (data) => `
    <div class="col-12 col-md-6 col-lg-4 my-3 justify-content-center">
        <div class="card shadow" style="width: 18rem;">
        <img src="../image/loker.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title">${data.title}</h3>
                <h4 class="office-loc">${data.location}</h4>
                <h5 class="jobdesk">Company: <span> ${data.company}</span></h5>
                <h5 class="category">Category:<span> ${data.job_category}</span></h5>
                <!-- <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic ad 
                neque omnis adipisci eveniet minima dolores explicabo recusandae dicta est, officiis 
                similique magni aspernatur aliquid fugiat accusantium, sint ratione.</p> -->
                <a href="#" class="btn apply-btn text-white">Kirim Lamaran</a>
                <div class="saved-job"></div>
            </div>
        </div>
    </div>
`;

export {
  createItemTemplate,
  createDetailTemplate,
};
