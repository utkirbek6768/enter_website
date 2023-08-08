<template>
  <Header />
  <div class="allCourses-hero courses">
    <div class="allCourses-control size-control">
      <div class="section__title mb-[40px]">Все курсы обучения</div>
      <div class="section__description max-w-[662px] text-[18px] mb-[40px]">
        Предоставляем курсы по программированию на различных языках. Получите
        навыки от экспертов и станьте профессионалом в своей области.
      </div>
      <div class="allCourses-lonkControl flex flex-wrap mb-[264px]">
        <div
          class="rounded-[30px] py-[15px] px-[30px] border-[1px] border-[#00274F] hover:bg-[#00274F] hover:text-white mr-[20px] mb-[20px] transition-all duration-500"
        >
          Все направления <span>24</span>
        </div>
        <div
          class="rounded-[30px] py-[15px] px-[30px] border-[1px] border-[#00274F] hover:bg-[#00274F] hover:text-white mr-[20px] mb-[20px] transition-all duration-500"
        >
          Програмирование <span>2</span>
        </div>
        <div
          class="rounded-[30px] py-[15px] px-[30px] border-[1px] border-[#00274F] hover:bg-[#00274F] hover:text-white mr-[20px] mb-[20px] transition-all duration-500"
        >
          ИТ <span>2</span>
        </div>
        <div
          class="rounded-[30px] py-[15px] px-[30px] border-[1px] border-[#00274F] hover:bg-[#00274F] hover:text-white mr-[20px] mb-[20px] transition-all duration-500"
        >
          Дизайн <span>2</span>
        </div>
        <div
          class="rounded-[30px] py-[15px] px-[30px] border-[1px] border-[#00274F] hover:bg-[#00274F] hover:text-white mr-[20px] mb-[20px] transition-all duration-500"
        >
          Тестирование <span>2</span>
        </div>
      </div>
    </div>
  </div>
  <div class="allCourses-filter bg-[#F5F6FA] py-[80px]">
    <div class="size-control grid grid-cols-12 xl:grid-cols-12">
      <div
        class="filter-control col-span-12 lg:col-span-6 xl:col-span-4 bg-[#F5F6FA] mr-[40px]"
      >
        <div class="list-control bg-white p-[40px] mb-[40px]">
          <div class="form__title mb-[20px]">Поиск по курсам</div>
          <div class="form-control bg-[#F5F6FA] flex items-center p-[18px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="7" stroke="#383838" />
              <path d="M20 20L16 16" stroke="#383838" stroke-linecap="square" />
            </svg>
            <input
              type="text"
              placeholder="Профессия, навык"
              class="w-[100%] pl-[10px] bg-[#F5F6FA] focus:outline-none"
            />
          </div>
        </div>
        <div class="list-control bg-white p-[40px] mb-[40px]">
          <div class="form__title mb-[20px]">Направление</div>
          <div class="form-control">
            <div class="checkbox-control flex mb-[30px]">
              <input type="checkbox" class="mr-[20px]" />
              <div class="checkbox-description">Информационные технологии</div>
            </div>
            <div class="checkbox-control flex mb-[30px]">
              <input type="checkbox" class="mr-[20px]" />
              <div class="checkbox-description">Програмирование</div>
            </div>
            <div class="checkbox-control flex mb-[30px]">
              <input type="checkbox" class="mr-[20px]" />
              <div class="checkbox-description">Дизайн</div>
            </div>

            <div class="checkbox-control flex mb-[30px]">
              <input type="checkbox" class="mr-[20px]" />
              <div class="checkbox-description">Маркетинг</div>
            </div>
          </div>
        </div>
        <div class="list-control bg-white p-[40px] mb-[40px]">
          <div class="form__title mb-[20px]">Уровень сложности</div>
          <div class="form-control">
            <div class="checkbox-control flex mb-[30px]">
              <input type="checkbox" class="mr-[20px]" />
              <div class="checkbox-description">Любой</div>
            </div>
            <div class="checkbox-control flex mb-[30px]">
              <input type="checkbox" class="mr-[20px]" />
              <div class="checkbox-description">Для начинающих</div>
            </div>
            <div class="checkbox-control flex mb-[30px]">
              <input type="checkbox" class="mr-[20px]" />
              <div class="checkbox-description">Для специалистов</div>
            </div>
          </div>
        </div>
        <div class="list-control bg-white p-[40px] mb-[40px]">
          <div class="form__title mb-[20px]">Длительность</div>
          <div class="form-control">
            <div class="checkbox-control flex mb-[30px]">
              <div class="checkbox-description">от 1 до 6 месяцов</div>
            </div>
          </div>
        </div>
        <div class="list-control bg-white p-[40px] mb-[40px]">
          <div class="form__title mb-[20px]">Тематика</div>
          <div class="form-control">
            <div class="checkbox-control flex mb-[30px]">
              <input type="checkbox" class="mr-[20px]" />
              <div class="checkbox-description">Photoshop</div>
            </div>
            <div class="checkbox-control flex mb-[30px]">
              <input type="checkbox" class="mr-[20px]" />
              <div class="checkbox-description">Figma</div>
            </div>
            <div class="checkbox-control flex mb-[30px]">
              <input type="checkbox" class="mr-[20px]" />
              <div class="checkbox-description">Python</div>
            </div>

            <div class="checkbox-control flex mb-[30px]">
              <input type="checkbox" class="mr-[20px]" />
              <div class="checkbox-description">C#</div>
            </div>
            <div class="checkbox-control flex mb-[30px]">
              <input type="checkbox" class="mr-[20px]" />
              <div class="checkbox-description">Фронтенд-разработка</div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="coursItem-control col-span-12 lg:col-span-6 xl:col-span-8 grid grid-cols-1 xl:grid-cols-2"
      >
        <div
          class="coursItem h-[520px] p-[40px] relative"
          style="
            background-image: url('/_nuxt/public/coursItem-bg.png');
            background-repeat: no-repeat;
            background-size: cover;
          "
        >
          <div class="coursItem-link-control flex mb-[60px]">
            <div class="coursItem__link py-[10px] px-[20px] rounded-[20px]">
              Програмирование
            </div>
            <div class="discount">Скидка 40%</div>
          </div>
          <div class="coursItem__title mb-[20px]">Python-разработчик</div>
          <div class="coursItem__description">
            Станьте инженером-программистом на одном из самых простых и
            популярных языков программирования Python. На практике научитесь
            понимать фундаментальные алгоритмы и использовать их для решения
            задач.
          </div>
          <div class="studyPeriod">Study period: <span> 6 месяцов</span></div>
          <img src="/_nuxt/public/phyton-logo.png" class="coursItem-img" />
        </div>
        <div
          class="coursItem h-[520px] p-[40px] relative"
          style="
            background-image: url('/_nuxt/public/design.png');
            background-repeat: no-repeat;
            background-size: cover;
          "
        >
          <div class="coursItem-link-control flex mb-[60px]">
            <div class="coursItem__link py-[10px] px-[20px] rounded-[20px]">
              Програмирование
            </div>
            <div class="discount">Скидка 40%</div>
          </div>
          <div class="coursItem__title mb-[20px]">Python-разработчик</div>
          <div class="coursItem__description">
            Станьте инженером-программистом на одном из самых простых и
            популярных языков программирования Python. На практике научитесь
            понимать фундаментальные алгоритмы и использовать их для решения
            задач.
          </div>
          <div class="studyPeriod">Study period: <span> 6 месяцов</span></div>
        </div>
        <div
          class="coursItem h-[520px] p-[40px] relative"
          style="
            background-image: url('/_nuxt/public/coursItem-bg.png');
            background-repeat: no-repeat;
            background-size: cover;
          "
        >
          <div class="coursItem-link-control flex mb-[60px]">
            <div class="coursItem__link py-[10px] px-[20px] rounded-[20px]">
              Програмирование
            </div>
            <div class="discount">Скидка 40%</div>
          </div>
          <div class="coursItem__title mb-[20px]">Python-разработчик</div>
          <div class="coursItem__description">
            Станьте инженером-программистом на одном из самых простых и
            популярных языков программирования Python. На практике научитесь
            понимать фундаментальные алгоритмы и использовать их для решения
            задач.
          </div>
          <div class="studyPeriod">Study period: <span> 6 месяцов</span></div>
          <img src="/_nuxt/public/phyton-logo.png" class="coursItem-img" />
        </div>
        <div
          class="coursItem h-[520px] p-[40px] relative"
          style="
            background-image: url('/_nuxt/public/design.png');
            background-repeat: no-repeat;
            background-size: cover;
          "
        >
          <div class="coursItem-link-control flex mb-[60px]">
            <div class="coursItem__link py-[10px] px-[20px] rounded-[20px]">
              Програмирование
            </div>
            <div class="discount">Скидка 40%</div>
          </div>
          <div class="coursItem__title mb-[20px]">Python-разработчик</div>
          <div class="coursItem__description">
            Станьте инженером-программистом на одном из самых простых и
            популярных языков программирования Python. На практике научитесь
            понимать фундаментальные алгоритмы и использовать их для решения
            задач.
          </div>
          <div class="studyPeriod">Study period: <span> 6 месяцов</span></div>
        </div>
        <div
          class="coursItem h-[520px] p-[40px] relative"
          style="
            background-image: url('/_nuxt/public/coursItem-bg.png');
            background-repeat: no-repeat;
            background-size: cover;
          "
        >
          <div class="coursItem-link-control flex mb-[60px]">
            <div class="coursItem__link py-[10px] px-[20px] rounded-[20px]">
              Програмирование
            </div>
            <div class="discount">Скидка 40%</div>
          </div>
          <div class="coursItem__title mb-[20px]">Python-разработчик</div>
          <div class="coursItem__description">
            Станьте инженером-программистом на одном из самых простых и
            популярных языков программирования Python. На практике научитесь
            понимать фундаментальные алгоритмы и использовать их для решения
            задач.
          </div>
          <div class="studyPeriod">Study period: <span> 6 месяцов</span></div>
          <img src="/_nuxt/public/phyton-logo.png" class="coursItem-img" />
        </div>
        <div
          class="coursItem h-[520px] p-[40px] relative"
          style="
            background-image: url('/_nuxt/public/design.png');
            background-repeat: no-repeat;
            background-size: cover;
          "
        >
          <div class="coursItem-link-control flex mb-[60px]">
            <div class="coursItem__link py-[10px] px-[20px] rounded-[20px]">
              Програмирование
            </div>
            <div class="discount">Скидка 40%</div>
          </div>
          <div class="coursItem__title mb-[20px]">Python-разработчик</div>
          <div class="coursItem__description">
            Станьте инженером-программистом на одном из самых простых и
            популярных языков программирования Python. На практике научитесь
            понимать фундаментальные алгоритмы и использовать их для решения
            задач.
          </div>
          <div class="studyPeriod">Study period: <span> 6 месяцов</span></div>
        </div>
        <div
          class="coursItem h-[520px] p-[40px] relative"
          style="
            background-image: url('/_nuxt/public/coursItem-bg.png');
            background-repeat: no-repeat;
            background-size: cover;
          "
        >
          <div class="coursItem-link-control flex mb-[60px]">
            <div class="coursItem__link py-[10px] px-[20px] rounded-[20px]">
              Програмирование
            </div>
            <div class="discount">Скидка 40%</div>
          </div>
          <div class="coursItem__title mb-[20px]">Python-разработчик</div>
          <div class="coursItem__description">
            Станьте инженером-программистом на одном из самых простых и
            популярных языков программирования Python. На практике научитесь
            понимать фундаментальные алгоритмы и использовать их для решения
            задач.
          </div>
          <div class="studyPeriod">Study period: <span> 6 месяцов</span></div>
          <img src="/_nuxt/public/phyton-logo.png" class="coursItem-img" />
        </div>
        <div
          class="coursItem h-[520px] p-[40px] relative"
          style="
            background-image: url('/_nuxt/public/3d-design-bg.png');
            background-repeat: no-repeat;
            background-size: cover;
          "
        >
          <div class="coursItem-link-control flex mb-[60px]">
            <div class="coursItem__link py-[10px] px-[20px] rounded-[20px]">
              Програмирование
            </div>
            <div class="discount">Скидка 40%</div>
          </div>
          <div class="coursItem__title mb-[20px]">Python-разработчик</div>
          <div class="coursItem__description">
            Станьте инженером-программистом на одном из самых простых и
            популярных языков программирования Python. На практике научитесь
            понимать фундаментальные алгоритмы и использовать их для решения
            задач.
          </div>
          <div class="studyPeriod">Study period: <span> 6 месяцов</span></div>
        </div>
      </div>
    </div>
  </div>
  <Fotter />
</template>

<script>
export default {};
</script>

<style scoped>
.coursItem {
  margin-bottom: 40px;
  transition: all 0.5s ease;
}
.coursItem:hover {
  transform: translate(10px, -10px);
}
.coursItem:nth-child(odd) {
  margin-right: 40px;
  color: #00274f;
}
.coursItem:nth-child(even) {
  margin-right: 40px;
  color: white;
}

.form__title {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: #00274f;
}
.checkbox-control {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: #647081;
}
.coursItem__link {
  background: rgba(0, 39, 79, 0.05);
  margin-right: 10px;
  transition: all 0.5s ease;
}
.coursItem__link:hover {
  background-color: red;
  cursor: pointer;
  color: white;
}
.discount {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
  width: 121px;
  height: 40px;
  background: #f74d6c;
  border-radius: 20px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: white;
}
.coursItem__title {
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 140%;
  display: flex;
  align-items: center;
}
.coursItem__description {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  display: flex;
  align-items: center;
}
.studyPeriod {
  margin-top: auto;
  position: absolute;
  bottom: 40px;
}
.coursItem-img {
  position: absolute;
  width: 180px;
  height: 180px;
  right: 30px;
  bottom: 40px;
}
</style>
