<template>
 <div>
  <Header/>
 </div>
  <div class="about">
    <div class="about-content">
      <h1>О нас</h1>
      <div class="about-text">
        <p class="hello">Добро пожаловать в магазин кроссовок!</p>
        <p>Мы предлагаем широкий ассортимент качественной обуви для спорта и активного образа жизни. Наша команда
          состоит из профессионалов, которые следят за последними тенденциями моды и инновациями в области спортивной
          обуви.</p>
        <h2>Наша миссия</h2>
        <p>Мы стремимся предоставить нашим клиентам лучшие кроссовки по выгодным ценам. Мы верим, что каждый заслуживает
          возможности найти идеальную обувь, которая сочетает в себе стиль, комфорт и функциональность.</p>
        <h2>Наши ценности</h2>
        <ul>
          <li>Качество - мы тщательно отбираем обувь у проверенных производителей, чтобы убедиться в ее высоком
            качестве.</li>
          <li>Стиль - мы следим за последними трендами и предлагаем модные модели кроссовок для всех возрастов и стилей.
          </li>
          <li>Удобство - комфорт наших клиентов для нас превыше всего. Мы уверены, что правильно подобранная обувь
            способствует активному образу жизни.</li>
          <li>Профессионализм - наша команда экспертов всегда готова помочь вам с выбором обуви и ответить на все ваши
            вопросы.</li>
        </ul>
        <h2>Свяжитесь с нами</h2>
        <p>Если у вас возникли вопросы или предложения, не стесняйтесь связаться с нами:</p>
        <ul>
          <li>Email: stepan.gavriusenco@gmail.com</li>
          <li>Телефон: +37378599537
          </li>
          <li>Адрес: ул. Дачия, д.1, Молдова</li>
        </ul>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script setup>
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'

</script>

<style scoped>
.hello {
  font-weight: 700;
}

.about {
  background-color: #fff;
  padding: 50px 20px;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
}

.about h1 {
  text-align: center;
  color: #333;
  font-size: 36px;
  margin-bottom: 20px;
}

.about-text {
  font-size: 16px;
  line-height: 1.6;
}

.about-text p {
  margin-bottom: 20px;

}

.about-text h2 {
  color: #333;
  margin-top: 30px;
  font-weight: 700
}

.about-text ul {
  list-style: none;
  padding-left: 0;
  margin-top: 10px;
}

.about-text ul li {
  margin-bottom: 10px;
}

.about-image {
  text-align: center;
  margin-top: 30px;
}

.about-image img {
  max-width: 100%;
}
</style>