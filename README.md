### Hexlet tests and linter status, Codeclimate:
[![Actions Status](https://github.com/AlexanderKireev/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/AlexanderKireev/frontend-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/6086a9192ee52f151d84/maintainability)](https://codeclimate.com/github/AlexanderKireev/frontend-project-44/maintainability)

## Проект "Игры разума" ("Brain Games")
Выполнен в рамках обучения в компании "Хекслет" ("Hexlet Ltd.") на курсе "фронтенд-разработчик".

Принят: XX XX 2023 года. Студент: Киреев Александр. Куратор: Абдулсаламов Динислам ("Hexlet Ltd.").

[![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/assets/master/images/hexlet_logo128.png)](https://ru.hexlet.io/pages/about?utm_source=github&utm_medium=link&utm_campaign=java-package)

Аналогичный проект, выполненный в рамках курса "Хекслет, java-разработчик" представлен по [ссылке](https://github.com/AlexanderKireev/java-project-lvl1).

Проект представлен пятью играми: "Проверка на чётность", "Калькулятор", "НОД", "Арифметическая прогрессия", "Простое ли число?".

Полученные навыки:
- работа с ОП Ubuntu
- настройка окружения
- работа в командной строке
- работа с Node.js (npm, npx)
- импорт внешних библиотек, настройка зависимостей
- работа с Git
- использование Makefile
- использование линтера (Eslint)
- работа с CodeClimate
- работа в редакторе Visual Studio Code
## Минимальные требования
```sh
node.js 20.0.0
readline-sync 1.4.10
make
```
## Установка проекта
```sh
npm install @hexlet/code
```
## Установка зависимостей
```sh
make install
```
## Глобальная установка пакетов
```sh
npm link
```
## Запуск приветствия
```sh
brain-games
```
## Запуск игр
```sh
brain-even
brain-calc
brain-gcd
brain-progression
bain-prime
```
## Линтер
```sh
make lint
```
## Описание проекта
В случае запуска "Приветствия" программа завершается после ввода имени игрока, поприветствовав его.
```java
Welcome to the Brain Games!
May I have your name?

Hello, Bill!
```
При старте каждая из игр также предлагает ввести имя игрока с клавиатуры и, после его приветствия, выводит вопрос и три случайных варианта условий для решения.

Ответы вводятся игроком с клавиатуры.

В случае трех верных ответов выводится поздравление игрока. 
```java
Correct!
Congratulations, Bill! 
```
В слачае ошибки - игра прерывается сообщением о "неверном ответе" и завершением программы.
```java
'72' is wrong answer ;(. Correct answer was '70'
Let's try again, Bill!
```

## Демонстрация проекта
#### brain-even
[![asciicast](https://asciinema.org/a/610432.svg)](https://asciinema.org/a/610432)
#### brain-calc
[![asciicast](https://asciinema.org/a/610428.svg)](https://asciinema.org/a/610428)
#### brain-gcd
[![asciicast](https://asciinema.org/a/610440.svg)](https://asciinema.org/a/610440)
#### brain-progression
[![asciicast](https://asciinema.org/a/610416.svg)](https://asciinema.org/a/610416)
#### brain-prime
[![asciicast](https://asciinema.org/a/610435.svg)](https://asciinema.org/a/610435)