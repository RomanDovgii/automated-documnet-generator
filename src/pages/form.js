function Form() {

    function inputDate(e) {
        e.preventDefault();
        
    }

    return (
        <div>
            <header>

            </header>
            <main>
                <section>
                    <h2>Выбранные документы</h2>

                </section>
                <section>
                    <h2>Данные для заполнения</h2>
                    <form>
                        
                        <button type="submit">Сгенерировать</button>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default Form;