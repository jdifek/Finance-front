
export const HistoryPage = () => {
  return (
    <>
      <h1>HistoryPage</h1>

      {[1, 2, 3, 4, 5].map((el) => (
        <div key={el} className="history__block">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "10px",
            }}
          >
            <h2 className="history__block-h">Category: Car</h2>
          </div>

          <p className="history__block-price">255$</p>
        </div>
      ))}
    </>
  );
};
