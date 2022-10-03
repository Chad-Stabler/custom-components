/* eslint-disable react/prop-types */
export default function SearchResultCard({ beanie, infiniteScrollRef }) {
  return (<li ref={infiniteScrollRef}>
    {beanie.pokemon}
    <img src={beanie.url_image} />
  </li>);
}
