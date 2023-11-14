import PropTypes from "prop-types";
import data  from "data/data.json"
import CSS from "../Statistics/Statistics.module.css";

const Statistics = ({title, stats} = data) => 
(    
    <section className={CSS.statistics}>
  <h2 className={CSS.title}>{title || false}</h2>
  <ul className={CSS.stat_list}>

    {stats.map( (item) =>(
        <li className={CSS.item} key={item.id}>
        <span className={CSS.label}>{item.label}</span>
        <span className={CSS.percentage}>{item.percentage}%</span>
    </li>
    ))}
  </ul>
</section>
);
Statistics.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
}
export default Statistics
