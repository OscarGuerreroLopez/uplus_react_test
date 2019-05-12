import styled from "styled-components";

export const Td = styled.td`
  color: palevioletred;
  white-space: nowrap;
  overflow: hidden;

  max-width: 200ch;
  white-space: -moz-pre-wrap; /* Mozilla */
  white-space: -pre-wrap; /* Opera 4 - 6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  white-space: pre-wrap; /* CSS3  */
  word-wrap: break-word; /* IE 5.5+ */
  //   text-overflow: ellipsis;
`;
