<template>
  <div class="content-wrapper">
    <div class="md-layout" style="margin-bottom:50px;">
      <div class="md-layout-item">
        <md-button class="md-warning" @click="exportPDF()">Generate PDF</md-button>
      </div>
    </div>

    <div class="md-layout generate">
      <img src="/img/RechnungInvoiceHead.JPG" alt>

      <br>

      <div class="md-layout-item md-layout md-size-100">
        <div class="md-layout-item md-size-60">
          <h4>
            <strong style="font-weight:400;">OT Limousinenservice</strong>
          </h4>
        </div>

        <div class="md-layout-item md-layout md-size-40">
          <div class="md-layout-item md-layout md-size-100">
            <div class="md-layout-item" style="padding-left: 0px;">
              <p
                style="text-align: left;margin-top: 25px;margin-bottom: 0px;font-size: 10px; height: 15px;"
              >Datum:</p>
              <p
                style="text-align: left;margin-top: 0px;margin-bottom: 0px;font-size: 10px;height: 15px;"
              >Rechnung Nr.:</p>
              <p
                style="text-align: left;margin-top: 0px;margin-bottom: 0px;font-size: 10px;height: 15px;"
              >UID Nr.:</p>
            </div>

            <div class="md-layout-item">
              <p
                style="text-align: left;margin-top: 25px;margin-bottom: 0px;font-size: 10px;height: 15px;"
              >3. Juni 2019</p>
              <p
                style="text-align: left;margin-top: 0px;margin-bottom: 0px;font-size: 10px;height: 15px;"
              >AHG9</p>
              <p
                style="text-align: left;margin-top: 0px;margin-bottom: 0px;font-size: 10px;height: 15px;"
              >ATU73409</p>
            </div>
          </div>
        </div>
      </div>

      <div class="md-layout-item md-layout md-size-100">
        <div class="md-layout-item md-layout md-size-60">
          <br>
          <br>
          <div class="md-layout-item md-size-20" style="padding-left: 0;">
            <p
              style="text-align: left;margin-top: 25px;margin-bottom: 0px;font-size: 10px; height: 15px;"
            >An:</p>
          </div>

          <div class="md-layout-item md-size-60">
            <p
              style="text-align: left;margin-top: 25px;margin-bottom: 0px;font-size: 10px; height: 15px;"
            >Susanna Reidl</p>
            <p
              style="text-align: left;margin-top: 0px;margin-bottom: 0px;font-size: 10px; height: 15px;"
            >BWM Headquarters GmbH</p>
            <p
              style="text-align: left;margin-top: 0px;margin-bottom: 0px;font-size: 10px; height: 15px;"
            >Geiss strasse 3/8 .OG</p>
            <p
              style="text-align: left;margin-top: 0px;margin-bottom: 0px;font-size: 10px; height: 15px;"
            >1120 Wien Osterreich</p>
          </div>
        </div>

        <div class="md-layout-item md-layout md-size-40">
          <div class="md-layout-item">
            <p
              style="text-align: left;margin-top: 25px;margin-bottom: 0px;font-size: 10px; height: 15px;"
            >Bank Austria</p>
            <p
              style="text-align: left;margin-top: 0px;margin-bottom: 0px;font-size: 10px;height: 15px;"
            >BIC: L302398234l</p>
            <p
              style="text-align: left;margin-top: 0px;margin-bottom: 0px;font-size: 10px;height: 15px;"
            >IBAN: AT023423033</p>
          </div>
        </div>
      </div>

      <div class="md-layout-item md-layout md-size-100">
        <div class="md-layout-item md-size-60">
          <br>
          <br>
          <table
            style="background: #887617; border: 1px solid #c49a00; width: 95%; font-size: 8px;"
          >
            <tr style="background: #887617; ">
              <th
                style="background: #887617; color:white; border-right: 1px solid #c49a00; 
              border-left: 1px solid #c49a00;  font-weight:100; padding:0px;
               border-bottom: none;"
              >Rechnungs Ersteller</th>
              <th
                style="background: #887617; color:white; font-weight:100; padding:0px; border-bottom: none; border-right:none;"
              >Zahlungs Form</th>
            </tr>
            <tr style=" background:white;">
              <td
                style=";text-align:center; border-right: 1px solid #c49a00;border-left: 1px solid #c49a00; padding:0px; border-bottom: none;"
              >Alfreds Futterkiste</td>
              <td
                style="text-align:center; padding:0px; border-bottom: none; border-right: none;"
              >Monats Abrechnung</td>
            </tr>
          </table>
        </div>

        <div class="md-layout-item md-size-40">
          <br>
          <br>
          <table
            style="background: #887617; border: 1px solid #c49a00; width: 80%; height: 40px; float:right; font-size:8px;"
          >
            <tr style="background: #887617; ">
              <th
                style="background: #887617; color:white; border-right: 1px solid #c49a00; 
              border-left: 1px solid #c49a00;  font-weight:100; padding:0px;
               border-bottom: none;"
              >Rechnungs Datum</th>
            </tr>
            <tr style=" background:white;">
              <td
                style="text-align:center; padding:0px; border-bottom: none; border-right: none;"
              >Mai 2019</td>
            </tr>
          </table>
        </div>
      </div>

      <div
        class="md-layout-item md-layout md-size-100"
        style="padding-left: 0px; padding-right:0px;"
      >
        <table style="width: 100%;  margin-top:20px; font-size:8px; text-align:center;">
          <tr>
            <th
              style="width:80px; border-top:1px solid black; border-left: 1px solid black;"
            >Pickup Date</th>
            <th style="width:50px;border-top:1px solid black;">KSt</th>
            <th style="width:70px;border-top:1px solid black;">Orderer</th>
            <th style="width:90px;border-top:1px solid black;">Message</th>
            <th style="width:40px;border-top:1px solid black;">Stops</th>
            <th style="border-top:1px solid black;">Pickup</th>
            <th style="border-top:1px solid black;">Destination</th>
            <th style="width:50px;border-top:1px solid black;">Price</th>
          </tr>
          <tr>
            <td style="border-left: 1px solid black;">24-05-2019 10:10</td>
            <td>UT2032493</td>
            <td>Herr Kari Pidhis</td>
            <td>Herrn Palla Modhe OS834</td>
            <td>5</td>
            <td>Flughafen Wien (VIE), Wien-Flughafen, Schwechat, Osterreich</td>
            <td>Hotel Wien, Bytha Zjarrit, Wien, Osterreich</td>
            <td>34.00</td>
          </tr>

          <!-- dont include this in vfor -->

          <tr>
            <td style="border:none;"></td>
            <td style="border:none;"></td>
            <td style="border:none;"></td>
            <td style="border:none;"></td>
            <td style="border:none;"></td>
            <td style="border:none;"></td>
            <td style="border:none;text-align:right;">Netto:</td>
            <td style="border-left:1px solid black;">309.09E</td>
          </tr>

          <tr>
            <td style="border:none;"></td>
            <td style="border:none;"></td>
            <td style="border:none;"></td>
            <td style="border:none;"></td>
            <td style="border:none;"></td>
            <td style="border:none;"></td>
            <td style="border:none;text-align:right;">10% MwSt:</td>
            <td style="border-left:1px solid black;">309.09E</td>
          </tr>

          <tr>
            <td style="border:none;"></td>
            <td style="border:none;"></td>
            <td style="border:none;"></td>
            <td style="border:none;"></td>
            <td style="border:none;"></td>
            <td style="border:none;"></td>
            <td style="border:none;text-align:right;">Brutto:</td>
            <td style="border-left:1px solid black;">309.09E</td>
          </tr>
        </table>
        <br>
        <br>
      </div>

      <div class="md-layout-item md-size-100">
        <p style="font-size:10px;">Zahlungsziel 14 Tage ab dem Rechnungsdatum.</p>
        <br>
        <br>
      </div>

      <div class="md-layout-item md-size-100">
        <h3 style="text-align:center; font-size: 10px;">OT Limousinenservice KG</h3>
        <h3 style="text-align:center; font-size: 10px;">Danke fur Ihre Zusammenarbeit!</h3>
      </div>

      <div class="md-layout-item md-size-100">
        <br>
        <p
          style="color: orange; text-align: center; font-size:9px;"
        >Steinhagegasse 9/12, 1120 Wien Osterreich Tel.: 0676/463-3237 Office@ot-limo.at</p>
      </div>
    </div>
  </div>
</template>

<script>
import * as html2pdf from "html2pdf.js";
import { GET_ADMIN_INVOICE } from "@/store/actions.type";
import { mapGetters } from "vuex";
// const moment = require('moment');

export default {
  name: "InvoiceDetail",
  data() {
    return {
      invoice: {
        ref: "ASD",
        datum: "1999-12-31",
        rechnung_nr: "123",
        uid_nr: "523",
        bank_name: "asdf",
        bic: "adf",
        iban: "234df",
        an_name: "asdf",
        an_company: "qwer",
        an_company_address: "wefioj",
        an_company_postcode: "2314",
        an_company_city: "sdf",
        an_company_state: "sdf3er",
        rechnungsersteller: "asdfwe",
        zahlungsform: "credit",
        rechnung_datum: "2000-12-31",
        zahlungsziel: "14",
        tax: "10",
        total: "999"
      }
    };
  },
  components: {},
  methods: {
    exportPDF() {
      const element = document.querySelector(".generate");
      let invoiceId = this.$route.params.id;
      const opt = {
        margin: 8,
        filename: `invoice-${invoiceId}.pdf`,
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 2 }
      };
      html2pdf()
        .from(element)
        .set(opt)
        .save();
    }
  },
  created() {
    let payload = { invoiceId: this.$route.params.id };
    this.$store.dispatch(GET_ADMIN_INVOICE, payload);
  },
  computed: {
    ...mapGetters(["getAdminInvoice"])
  }
};
</script>


<style scoped>
table,
tr,
thead,
td {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

.bordered-black {
  border: 1px solid black;
}

th,
td {
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  padding: 4px;
}
</style>
