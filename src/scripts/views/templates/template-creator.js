const createDetailTemplate = (data) => `
  <h2 class="job__title">${data.title}</h2>
  <img class="company__logo" src="" alt="${data.title}" />
  <div class="job__info">
    <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${data.tagline}</p>
    <h4>Release Date</h4>
    <p>${data.release_date}</p>
    <h4>Duration</h4>
    <p>${data.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${data.vote_average}</p>
  </div>
  <div class="jobs__description">
    <h3>Overview</h3>
    <p>${data.descriotion}</p>
    <a href="${data.link}" target="_blank" class="btn apply-btn text-white">Kirim Lamaran</a>
  </div>
`;

const createItemTemplate = (data) => `
    <div class="col-12 col-md-6 col-lg-4 my-3 justify-content-center">
        <div class="card shadow" style="width: 18rem;">
        <img src="../image/loker.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title"><a href="/#/detail/${data.id}" style="text-decoration: none" class="card-title"> ${data.title}</a></h3>
                <h4 class="office-loc">${data.location}</h4>
                <h5 class="jobdesk">Company: <span> ${data.company}</span></h5>
                <h5 class="category">Category:<span> ${data.job_category}</span></h5>
                <!-- <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic ad 
                neque omnis adipisci eveniet minima dolores explicabo recusandae dicta est, officiis 
                similique magni aspernatur aliquid fugiat accusantium, sint ratione.</p> -->
                <a href="${data.link}" target="_blank" class="btn apply-btn text-white">Kirim Lamaran</a>
                <div class="saved-job"></div>
            </div>
        </div>
    </div>
`;

export {
  createItemTemplate,
  createDetailTemplate,
};
