const hyeongnya = require('./index');

const hyeong = '혀어어어어어어어엉........ 핫. 혀엉..... 흑... 하앗... 흐윽... 형.  하앙. 혀엉.... 하앙... 흐윽... 항. 항. 형... 하앙. 흐으윽... 형... 흡... 혀엉.. 하아아앗. 혀엉.. 흡... 흐읍... 형.. 하앗. 하아앙... 형... 하앙... 흐윽... 혀어어엉.. 하앙. 항. 형... 하앙. 혀엉.... 하앙. 흑... 항. 형... 흡 하앗. 혀엉..... 흑. 흣';
const yaong = '야오오오오오오오옹~~~~~~~~ 냥. 야옹~~~~~ 뺩... 냐앙~~~ 골골... 양.  먀암~ 야옹~~~~ 먀암~~~ 골골... 먐. 먐. 양... 먀암~ 골골골... 양... 꾹... 야옹~~ 냐아아앙~ 야옹~~ 꾹... 꾸욱... 양.. 냐앙~ 먀아암~~~ 양... 먀암~~~ 골골... 야오오옹~~ 먀암~ 먐. 양... 먀암~ 야옹~~~~ 먀암~ 뺩... 먐. 양... 꾹 냐앙~ 야옹~~~~~ 뺩. 굵';

try {
    const convertedYaong = hyeongnya.toYaong(hyeong);
    console.log(`혀엉 -> 야옹: \n${convertedYaong}\n`);
    
    const convertedHyeong = hyeongnya.toHyeong(yaong);
    console.log(`야옹 -> 혀엉: \n${convertedHyeong}\n`);

    if (hyeongnya.toYaong(hyeong) === yaong &&
        hyeongnya.toHyeong(yaong) === hyeong) {
        console.log('It works successfully!');
    } else {
        throw new Error('Something went wrong');
    }
    process.exit(0);
} catch (e) {
    console.error(e);
    process.exit(1);
}