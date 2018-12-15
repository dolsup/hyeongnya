# Hyeongnya
[![NPM](https://nodei.co/npm/hyeongnya.png?compact=true)](https://nodei.co/npm/hyeongnya/) <br>
A Node.js transpiler between [혀엉](https://gist.github.com/xnuk/d9f883ede568d97caa158255e4b4d069) and [야옹](https://gist.github.com/dolsup/0958256a5114a2d21355e0bcddbc1dee)

## usage
```
npm i hyeongnya
```

## example
```js
const hyeongnya = require('hyeongnya');

const hyeong = '혀어어어어어어어엉........ 핫. 혀엉..... 흑... 하앗... 흐윽... 형.  하앙. 혀엉.... 하앙... 흐윽... 항. 항. 형... 하앙. 흐으윽... 형... 흡... 혀엉.. 하아아앗. 혀엉.. 흡... 흐읍... 형.. 하앗. 하아앙... 형... 하앙... 흐윽... 혀어어엉.. 하앙. 항. 형... 하앙. 혀엉.... 하앙. 흑... 항. 형... 흡 하앗. 혀엉..... 흑. 흣';
const yaong = '야오오오오오오오옹~~~~~~~~ 냥. 야옹~~~~~ 뺩... 냐앙~~~ 골골... 양.  먀암~ 야옹~~~~ 먀암~~~ 골골... 먐. 먐. 양... 먀암~ 골골골... 양... 꾹... 야옹~~ 냐아아앙~ 야옹~~ 꾹... 꾸욱... 양.. 냐앙~ 먀아암~~~ 양... 먀암~~~ 골골... 야오오옹~~ 먀암~ 먐. 양... 먀암~ 야옹~~~~ 먀암~ 뺩... 먐. 양... 꾹 냐앙~ 야옹~~~~~ 뺩. 굵';

const convertedHyeong = hyeongnya.toYaong(hyeong);
const convertedYaong = hyeongnya.toHyeong(yaong);
```

## API
### `toYaong(hyeongCode: string): string`
혀엉 -> 야옹
### `toHyeong(yaongCode: string): string`
야옹 -> 혀엉

## License
[THE BEER-WARE LICENSE (Revision 42)](http://en.wikipedia.org/wiki/Beerware)