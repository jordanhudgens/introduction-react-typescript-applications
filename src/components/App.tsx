import * as React from "react";

interface IInvoiceListProps {
  invoiceData: InvoiceDataType;
  logo?: string;
}

type InvoiceDataType = {
  customerName: string;
  invoices: InvoiceType[];
};

type PaymentStatusType = "paid" | "pending" | "late";

type InvoiceType = {
  id: number;
  name: string;
  total: string;
  paymentStatus: PaymentStatusType;
};

const InvoiceList = (props: IInvoiceListProps) => {
  const { customerName, invoices } = props.invoiceData;

  const itemStyleContainer = {
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <div>
      <h1>{customerName}</h1>
      <hr />

      <div>
        {invoices.map((invoice) => (
          <div key={invoice.id} style={itemStyleContainer}>
            <div>{invoice.name}</div>

            <div>
              {invoice.total} - {invoice.paymentStatus}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const data: InvoiceDataType = {
    customerName: "Google",
    invoices: [
      { id: 123, name: "Dev work", total: "20.00", paymentStatus: "paid" },
      {
        id: 456,
        name: "More Dev work",
        total: "50.00",
        paymentStatus: "pending",
      },
      {
        id: 789,
        name: "Something different",
        total: "100.00",
        paymentStatus: "paid",
      },
    ],
  };

  return (
    <div>
      <InvoiceList invoiceData={data} />
    </div>
  );
};

export default App;
