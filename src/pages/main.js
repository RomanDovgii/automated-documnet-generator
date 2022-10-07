import Button from "../components/button";
import Paragraph from "../components/paragraph";
import { AppRoute } from "../utils/const";

function Main() {
    return (
        <div>
            <Paragraph
                text = "Добро пожаловать в автоматизированный редактор документов"
            />
            <Paragraph
                text = "Предлагаем вам сгенерировать ваш первый документ"
            />
            <Button
                text = "Вперёд"
                nextPage = {AppRoute.SELECT}
            />
        </div>
    );
}

export default Main;