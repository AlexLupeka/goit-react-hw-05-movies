import style from '@emotion/styled';

export const CastList = style.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    list-style: none;
`;

export const CastInput = style.li`
    margin: 10px;
    width: calc((100% - 80px) / 4);
`;

export const CastImg = style.img`
    display: block;
    width: 100%;
    height: auto;
`;
export const CastText = style.p``;
