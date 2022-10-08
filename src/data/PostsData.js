export const PostsData = [
    //{
    //    title: 'Заголовок поста',
    //    text: (<p className='text_post'>текст</p>),
    //    typeContent: 'type', //null image
    //    content: '',
    //    date: '22.06.2022'
    //},
    {
        title: 'Демонстрация функций №2',
        text: (<p className='text_post'>Этот пост демонстрирует возможность написания постов с содержанием сразу
                нескольких картинок.</p>),
        typeContent: 'image',
        content: {
            image: [
                require('../media/images/PostsContent/images/studio.jpg'),
                require('../media/images/PostsContent/images/studio2.jpg'),
                require('../media/images/PostsContent/images/studio.jpg'),
                require('../media/images/PostsContent/images/studio2.jpg'),
                require('../media/images/PostsContent/images/studio.jpg'),
                require('../media/images/PostsContent/images/studio2.jpg'),
            ],
            width: '60%'
        },
        date: '22.06.2022'
    },
    {
        title: 'Демонстрация функций №1',
        text: (<p className='text_post'>Этот пост демонстрирует возможность написания постов с прикреплением картинок.</p>),
        typeContent: 'image',
        content: {
            image: [require('../media/images/PostsContent/images/studio.jpg')],
            width: '60%'
        },
        date: '22.06.2022'
    },
    {
        title: 'Первый пост!',
        text: (<p className='text_post'>Это первый пост на оффициальном сайте FreshBlood's.<br/>
                Пост бывает трех типов:<br/>
                1) Обычный<br/>
                2) С картинкой <br/>
                3) С множеством картинок<br/>
                </p>),
        typeContent: 'null',
        content: '',
        date: '22.06.2022'
    },
]