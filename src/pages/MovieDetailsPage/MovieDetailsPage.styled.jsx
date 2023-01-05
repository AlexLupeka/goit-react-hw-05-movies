import style from '@emotion/styled';

export const MovieDetailsButton = style.button`
    margin-bottom: 16px;
    height: 28px;
    border: none;
    border-radius: 5px;
    color: azure;
    background-color: #1a2d5e;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
&:hover {
    opacity: 1;
}
`;

export const MovieDetailsCard = style.div`
    display: flex;
    margin-bottom: 15px;
`;

export const MovieDetailsImg = style.img`
    margin-right: 25px;
`;

export const MovieDetailsText = style.p`
 margin-right: 10px;
`;

export const MovieDetailsGenre = style.p`
    margin-right: 10px;
`;

export const MovieDetailsTitle = style.h3`
    margin: 10px auto 6px 10px;
`;
