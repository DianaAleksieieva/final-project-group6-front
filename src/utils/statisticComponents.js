import { ReactComponent as Education } from '../images/svg/statistics/expend/book.svg';
import { ReactComponent as Transport } from '../images/svg/statistics/expend/car.svg';
import { ReactComponent as Goods } from '../images/svg/statistics/expend/products.svg';
import { ReactComponent as Fun } from '../images/svg/statistics/expend/kite.svg';
import { ReactComponent as Health } from '../images/svg/statistics/expend/hands-holding-heart.svg';
import { ReactComponent as Alco } from '../images/svg/statistics/expend/cocktail.svg';
import { ReactComponent as House } from '../images/svg/statistics/expend/couch.svg';
import { ReactComponent as Tech } from '../images/svg/statistics/expend/tools.svg';
import { ReactComponent as Utilities } from '../images/svg/statistics/expend/invoice.svg';
import { ReactComponent as Sport } from '../images/svg/statistics/expend/clay.svg';
import { ReactComponent as Other } from '../images/svg/statistics/expend/ufo.svg';
import { ReactComponent as Freelance } from '../images/svg/statistics/income/freelance.svg';
import { ReactComponent as Salary } from '../images/svg/statistics/income/salary.svg';

const iconsContainer = [
    {
        CatName: "goods",
        CatLabel: "Продукты",
        Component: <Goods />
    },
    {
        CatName: "alco",
        CatLabel: "Алкоголь",
        Component: <Alco />
    },
    {
        CatName: "fun",
        CatLabel: "Развлечение",
        Component: <Fun />
    },
    {
        CatName: "health",
        CatLabel: "Здоровье",
        Component: <Health />
    },
    {
        CatName: "transport",
        CatLabel: "Транспорт",
        Component: <Transport />
    },
    {
        CatName: "house",
        CatLabel: "Все для дома",
        Component: <House />
    },
    {
        CatName: "tech",
        CatLabel: "Техника",
        Component: <Tech />
    },
    {
        CatName: "utilities",
        CatLabel: "Комуналка, Связь",
        Component: <Utilities />
    },
    {
        CatName: "sport",
        CatLabel: "Спорт, Хобби",
        Component: <Sport />
    },
    {
        CatName: "education",
        CatLabel: "Образование",
        Component: <Education />
    },
    {
        CatName: "other",
        CatLabel: "Прочее",
        Component: <Other />
    },
    {
        CatName: "salary",
        CatLabel: "ЗП",
        Component: <Salary />
    },
    {
        CatName: "freelance",
        CatLabel: "Доп. доход",
        Component: <Freelance />
    },
];

export default iconsContainer;