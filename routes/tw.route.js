const twVoucher = require("@fortune-inc/tw-voucher");
const express = require("express");
const routes = express.Router();

routes.post("/twvoucher", async (req, res) => {
  const phone = String(req.body.phone);
  const link = String(req.body.link);

  twVoucher(phone, link)
    .then((redeemed) => {
      return res.json({
        success: true,
        amount: redeemed.amount,
        msg: "เติมเงินเสร็จสิ้น",
      });
    })
    .catch(() => {
      return res.json({
        msg: "ลิ้งอั่งเปาไม่ถูกต้อง",
        amount: "0",
      });
    });
});

module.exports = routes;
