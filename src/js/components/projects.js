import vars from "../_vars";
// import {initSliders} from './text-slider';

document.addEventListener('DOMContentLoaded', () => {
  let countProjects = 2;
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
          <li class="develop-projects__item">
            <div class="develop-projects__text">
              <h3 class="develop-projects__caption">${data[i].title}</h3>
              <div class="develop-projects__technologes">
                <span class="develop-projects__technologes-text">Верстка на HTML</span>
                <span class="develop-projects__technologes-text">Работа с векторной графикой</span>
                <span class="develop-projects__technologes-text">Сборка проекта на Gulp</span>
                <span class="develop-projects__technologes-text">Работа с Git и GitHub</span>
              </div>
              <div class="develop-projects__buttons">
                <button class="develop-projects__btn main-link btn-reset">
                  О проекте
                  <svg class="develop-projects__btn-icon">
                    <use xlink:href="img/sprite.svg#right-arrow"></use>
                  </svg>
                </button>
                <a class="develop-projects__link main-link--transparent" href="#">
                  Репозиторий в Git
                  <svg class="develop-projects__link-icon">
                    <use xlink:href="img/sprite.svg#right-arrow"></use>
                  </svg>
                </a>
              </div>
            </div>
            <div class="develop-projects__image">
              <picture class="develop-projects__picture">
                <source srcset="img/${data[i].image}.avif" type="image/avif">
                <source srcset="img/${data[i].image}.webp" type="image/webp">
                <img loading="lazy" src="img/${data[i].image}.png" class="image" width="595" height="320" alt="${data[i].title}">
              </picture>
              <button class="develop-projects__picture-btn btn-reset main-link">
                О проекте
                <svg class="develop-projects__btn-icon">
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
