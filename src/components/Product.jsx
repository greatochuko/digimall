import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import Rating from "./Rating";

export default function Product() {
  return (
    <Link to="/product/chair" className={styles.product}>
      <img
        src="/gaming-chair.png"
        alt="gaming chair"
        className={styles.productImage}
      />
      <div className={styles.productDetails}>
        <p className={styles.productCategory}>Category</p>
        <h4 className={styles.productName}>
          Gaming Chair High Black Racing Computer Chair PU
        </h4>
        <Rating rating={5} reviews={1254} />
        <p className={styles.price}>
          $129<span>99</span>
        </p>
      </div>
    </Link>
  );
}
