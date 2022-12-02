import vars from "../_vars";

document.addEventListener('DOMContentLoaded', () => {
  let countProjects = 3;
  let dataLength = '';

  const fetchComments = (count = 2) => {
    fetch('projects.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dataLength = data.length;
      vars.projectsList.innerHTML = '';

      for (let i = 0; i < data.length; i++) {
        if (i < count) {
          vars.projectsList.innerHTML += `
          <li class="projects__item">
            <div class="projects__text">
              <h3 class="projects__caption">${data[i].title}</h3>
              <div class="projects__technologes">
                <span class="projects__technologes-text">${data[i].text_1}</span>
                <span class="projects__technologes-text">${data[i].text_2}</span>
                <span class="projects__technologes-text">${data[i].text_3}</span>
                ${data[i].text_4 ? `<span class="projects__technologes-text">${data[i].text_4}</span>` : ''}
              </div>
              <div class="projects__buttons">
                <button class="projects__btn main-link btn-reset" data-graph-path="project-${data[i].id}">
                  О проекте
                  <svg class="projects__btn-icon">
                    <use xlink:href="img/sprite.svg#right-arrow"></use>
                  </svg>
                </button>
                <a class="projects__link main-link--transparent" href="${data[i].linkGit}" target="_blank">
                  Репозиторий в Git
                  <svg class="projects__link-icon">
                    <use xlink:href="img/sprite.svg#right-arrow"></use>
                  </svg>
                </a>
              </div>
            </div>
            <div class="projects__image">
              <picture class="projects__picture">
                <source srcset="img/${data[i].image}.avif" type="image/avif">
                <source srcset="img/${data[i].image}.webp" type="image/webp">
                <img loading="lazy" src="img/${data[i].image}.png" class="image" width="595" height="320" alt="${data[i].title}">
              </picture>
              <button class="projects__picture-btn btn-reset main-link" data-graph-path="project-${data[i].id}">
                О проекте
                <svg class="projects__btn-icon">
                  <use xlink:href="img/sprite.svg#right-arrow"></use>
                </svg>
              </button>
            </div>
          </li>
          `
        }
      }
    });
  }

  fetchComments(countProjects);

  vars.btnMore?.addEventListener('click', () => {
    countProjects = countProjects + 2;

    fetchComments(countProjects);

    if (countProjects >= dataLength) {
      vars.btnMore.style.display = 'none';
    } else {
      vars.btnMore.style.display = 'inline-flex';
    }
  });

});
