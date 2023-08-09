class SuperMath {
    check(obj) {
      const { X, Y, znak } = obj;
  
      const message = `Ви хочете зробити дію ${X} ${znak} ${Y}? (ОК/Відміна)`;
      const result = confirm(message);
  
      if (result) {
        const result = this.math(X, Y, znak);
        alert(`Результат: ${result}`);
      } else {
        this.input();
      }
    }
  
    input() {
      const X = Number(prompt('Введіть число X:'));
      const Y = Number(prompt('Введіть число Y:'));
      let znak = prompt('Введіть операцію (+, -, /, *, %):');
      
      while (!['+', '-', '/', '*', '%'].includes(znak)) {
        znak = prompt('Некоректна операція. Введіть операцію (+, -, /, *, %):');
      }
      
      this.check({ X, Y, znak });
    }
    
  
    math(X, Y, znak) {
      switch (znak) {
        case '+':
          return X + Y;
        case '-':
          return X - Y;
        case '/':
          return X / Y;
        case '*':
          return X * Y;
        case '%':
          return X % Y;
        default:
          return null;
      }
    }
  }
  
  const obj = { X: 12, Y: 3, znak: '/' };
  const p = new SuperMath();
  p.check(obj);