import { Fragment } from "react";
import { Link } from "react-router-dom";
import Table from "../components/table";
import { AppRoute } from "../utils/const";

function Select() {
    return (
        <Fragment>
            <header>
                <div>
                    <Link to={AppRoute.MAIN}>Назад</Link>
                    <form>
                        <label>
                            <input type="text"/>
                        </label>
                        <button>
                            <span>Искать</span>
                        </button>
                    </form>
                    <Link to={AppRoute.FORM}>Вперед</Link>
                </div>
            </header>
            <main>
                <Table/>
            </main>
            <footer>

            </footer>
        </Fragment>
    );
}

export default Select;