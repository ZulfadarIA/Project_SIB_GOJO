const createDetailTemplate = (data) => `
  <div class="job_card ">
    <img class="job_img" src="${data.company_logo_url}"  alt="${data.title}" />
    <div class="job_info">
      <h3>Information</h3>
      <h4>Vacancy</h4>
      <p class="job__name">${data.title}</p>
      <h4>Location</h4>
      <p>${data.location}</p>
      <h4>Salary</h4>
      <p>${data.salary}</p>
    </div>
    <div class="job_description">
      <h3>${data.company}</h3>
      <p>${data.description}</p>
      <h3>Job Qualification</h3>
      <p>${data.requirements}</p>
      <h3>Job Description</h3>
      <p>${data.job_desks}</p>
      <a href="${data.link}" target="_blank" class="btn apply-btn text-white">Kirim Lamaran »</a>
    </div>
  </div>
`;

const createItemTemplate = (data) => `
    <div class="col-12 col-md-6 col-lg-4 my-3 justify-content-center">
        <div class="card shadow" style="width: 18rem;">
        <img src="${data.company_logo_url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title"><a href="/#/detail/${data.id}" style="text-decoration: none" class="card-title"> ${data.title}</a></h3>
                <h4 class="office-loc">${data.location}</h4>
                <h5 class="jobdesk">Company: <span> ${data.company}</span></h5>
                <h5 class="category">Category:<span> ${data.job_category}</span></h5>
                <!-- <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic ad 
                neque omnis adipisci eveniet minima dolores explicabo recusandae dicta est, officiis 
                similique magni aspernatur aliquid fugiat accusantium, sint ratione.</p> -->
                <a href="${data.link}" target="_blank" class="btn apply-btn text-white">Kirim Lamaran »</a>
                <div class="saved-job"></div>
            </div>
        </div>
    </div>
`;

const createAboutTemplate = () => `
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
      <img class="rounded-circle mx-auto" src="../image/Zulfadar_profile.jpg" alt="Generic placeholder image" width="200" height="200">
      <div class="card-body">
        <h2>Zulfadar Indaka Alkaf</h2>
        <p>Front End & UI Designer</p>
        <p><a class="btn btn-secondary " href="https://www.linkedin.com/in/zulfadar-indaka-alkaf-097b82255/" target="_blank" role="button">Connect »</a></p>
      </div>
    </div>
  </div>
  <div class="col-lg-5 mx-auto distance-1">
    <div class="card shadow mx-auto" style="max-width: 23rem;">
      <img class="rounded-circle mx-auto" src="../image/auf_profile.png" alt="Generic placeholder image" width="200" height="200">
      <div class="card-body">
        <h3>M.R. Abdurrahman’auf A</h3>
        <p>Front End</p>
        <p><a class="btn btn-secondary " href="https://www.linkedin.com/in/abdurrahman-auf-569872244/" target="_blank" role="button"> Connect »</a></p>
      </div>
    </div>
  </div>
  <div class="col-lg-5 mx-auto distance-1">
    <div class="card shadow mx-auto" style="max-width: 23rem;">
      <img class="rounded-circle mx-auto" src="../image/galuh_profile.jpg" alt="Generic placeholder image" width="200" height="200">
      <div class="card-body">
        <h2>Galuh Widy Nugroho</h2>
        <p>Front End</p>
        <p><a class="btn btn-secondary " href="https://www.linkedin.com/in/galuhwidynugroho/" target="_blank" role="button">Connect »</a></p>
      </div>
    </div>
  </div>
  <div class="col-lg-5 mx-auto distance-1">
    <div class="card shadow mx-auto" style="max-width: 23rem;">
      <img class="rounded-circle mx-auto" src="../image/faiz_profile.jpeg" alt="Generic placeholder image" width="200" height="200">
      <div class="card-body">
        <h2>Faiz Gunawan</h2>
        <p>Front End</p>
        <p><a class="btn btn-secondary " href="https://www.linkedin.com/in/faiz-gunawan/" target="_blank" role="button">Connect »</a></p>
      </div>
    </div>
  </div>
`;

export {
  createItemTemplate,
  createDetailTemplate,
  createAboutTemplate,
};
