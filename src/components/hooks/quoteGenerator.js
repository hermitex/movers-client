function quoteGenerator(moveData, rates) {
  const quotes = [];

  moveData.items.map((item) =>
    // eslint-disable-next-line array-callback-return
    rates.map((rate) => {
      console.log(rate);
      if (
        item["item"]?.toLocaleLowerCase() ===
        rate["item_name"]?.toLocaleLowerCase() //0(N)2
      ) {
        quotes.push({
          item_name: item.item,
          item_count: item.count,
          ppu: rate.price_per_unit,
          flat_price: rate.flat_price,
          discount: rate.discount,
          distance: rate.distance,
          subtotal: item.count * rate.price_per_unit,
          mover_id: rate.user.id,
          user_id: rate.user.id,
          mover_details: rate.user,
        });
      }
    })
  );

  function transformArr(orig) {
    var newArr = [],
      mover_ids = {},
      i,
      j,
      cur;
    for (i = 0, j = orig.length; i < j; i++) {
      cur = orig[i];
      if (!(cur.mover_id in mover_ids)) {
        mover_ids[cur.mover_id] = {
          mover_id: cur.mover_id,
          user_id: cur.mover_id,
          flat_price: cur.flat_price,
          discount: cur.discount,
          mover_quotes: [],
          mover_details: cur.mover_details,
        };

        newArr.push({ ...mover_ids[cur.mover_id], discount: cur.discount });
      }

      mover_ids[cur.mover_id].mover_quotes.push(cur);
    }
    return newArr;
  }

  const compiledQuotes = transformArr(quotes);

  const quotesIncludingGrandTotal = compiledQuotes.map((quote) => {
    quote = { ...quote, total: 0 };
    let sum = parseFloat(
      quote.mover_quotes.reduce(
        (previousValue, currentValue) => previousValue + currentValue.subtotal,
        0
      )
    );
    let items = sum;
    // get vat
    let vat = parseFloat((sum * 0.16).toFixed(2));
    sum = sum + vat;
    // get discount
    let moverDisc = parseFloat(quote.discount);
    const discount = +(sum * moverDisc).toFixed(2);
    console.log(sum);
    // subtract discount
    sum -= parseFloat(discount);
    sum += parseFloat(quote.flat_price);
    return {
      ...quote,
      flat_price: quote.flat_price,
      discount: parseFloat(discount),
      vat,
      items,
      total: sum,
    };
  });

  return quotesIncludingGrandTotal;
}

export default quoteGenerator;
