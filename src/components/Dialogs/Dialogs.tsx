import React from 'react';
import style from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={style.wrapper}>
            <aside className={style.dialogs_list}>
                <figure className={style.dialog_item}>
                    {/*user photo*/}
                    <img alt={'item_photo'} className={style.item_photo} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\''}/>
                    <figcaption className={style.item_name}>
                        {/*user name*/}
                        <a href={'#'}>Piter Parker</a>
                    </figcaption>
                </figure>
                <figure className={style.dialog_item}>
                    {/*user photo*/}
                    <img alt={'item_photo'} className={style.item_photo} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\''}/>
                    <figcaption className={style.item_name}>
                        {/*user name*/}
                        <a href={'#'}>Piter Parker</a>
                    </figcaption>
                </figure>
                <figure className={style.dialog_item}>
                    {/*user photo*/}
                    <img alt={'item_photo'} className={style.item_photo} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\''}/>
                    <figcaption className={style.item_name}>
                        {/*user name*/}
                        <a href={'#'}>Piter Parker</a>
                    </figcaption>
                </figure>
                <figure className={style.dialog_item}>
                    {/*user photo*/}
                    <img alt={'item_photo'} className={style.item_photo} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\''}/>
                    <figcaption className={style.item_name}>
                        {/*user name*/}
                        <a href={'#'}>Piter Parker</a>
                    </figcaption>
                </figure>
            </aside>
            <main className={style.messages}>
                <div className={style.message_item}>
                    {/*messages*/}
                    <figure>
                        <img alt={'user_photo'} className={style.message_item_photo} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\''}/>
                        <figcaption className={style.message}>
                            <h3 className={style.message_item_name}>Piter Parker</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </figcaption>
                    </figure>
                </div>
                <div className={style.message_item}>
                    {/*messages*/}
                    <figure>
                        <img alt={'user_photo'} className={style.message_item_photo} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNUr6_D1h11lM3KnJ_CgXxwoGF7mU7fIvxA&usqp=CAU\''}/>
                        <figcaption className={style.message}>
                            <h3 className={style.message_item_name}>Piter Parker</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </figcaption>
                    </figure>
                </div>
            </main>
        </div>
    );
};

export default Dialogs;