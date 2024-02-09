<template>
    <div class="spinner">
      <!-- Используем стандартный HTML спиннер -->
      <div class="lds-dual-ring"></div>
      <!-- Текст загрузки (может быть заменен на иконку, если нужно) -->
      <div class="loading-text">Loading...</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Spinner'
  };
  </script>
  
  <style>
  .spinner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 200px; /* Регулируйте высоту в зависимости от вашего контента */
  }
  
  .lds-dual-ring {
    display: inline-block;
    width: 64px;
    height: 64px;
  }
  
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #333; /* Цвет спиннера */
    border-color: #333 transparent #333 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  .loading-text {
    margin-top: 10px;
    font-size: 1rem;
    color: #333; /* Цвет текста загрузки */
  }
  </style>