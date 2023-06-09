import classes from "./ProductsSummary.module.css";

const ProductsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>다양한 메뉴를 스타벅스에서 즐겨보세요</h2>
      <p>
        스타벅스만의 특별함을 경험할 수 있는 최상의 선택 음료
        <br />
        스타벅스 커피와 완벽한 어울림을 자랑하는 푸드
        <br />
        다양한 시도와 디자인으로 가치를 더하는 상품
        <br />
        소중한 사람에게 마음을 전하는 가장 좋은 방법 스타벅스 카드
      </p>
    </section>
  );
};

export default ProductsSummary;
