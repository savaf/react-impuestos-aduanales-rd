import React, { useState, useCallback, useEffect } from "react";
import {
  Container,
  Header,
  Dimmer,
  Loader,
  Segment,
  Form,
  Label,
  Dropdown,
  Input,
  Table,
} from "semantic-ui-react";
import customsTaxes from "./data.json";
import exchangeApi from "./exchangeApi";
import { percentFormat } from "./utils";
import CustomTaxTable from "./components/CustomTaxTable";

const dropdownOptions = customsTaxes.map(({ id, Label: text }) => ({
  key: id,
  value: id,
  text,
}));

interface ICustomTaxes {
  id: string;
  Label: string;
  Gravamen: number;
  Selectivo: number;
  ITBIS: number;
  Observaciones: string;
}

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currencyCode] = useState<string>("USD_DOP");
  const [conversionRate, setConversionRate] = useState<number>(0);
  const [customTax, setCustomTax] = useState<ICustomTaxes | null>(null);
  const [weight, setWeight] = useState<number>(0);
  const [weightRate, setWeightRate] = useState<number>(0);

  const loadConversionRates = useCallback(() => {
    setIsLoading(true);
    exchangeApi(currencyCode).then((data) => {
      setIsLoading(false);
      let conversionRate: number | string = Number.parseFloat(
        data[currencyCode]
      ).toFixed(2);
      conversionRate = Number.parseFloat(conversionRate);
      setConversionRate(conversionRate);
    });
  }, [currencyCode]);

  const changeCustomTaxDropdown = useCallback(
    (e, { value }) => {
      const customTax = customsTaxes.find(({ id }) => id === value);
      setCustomTax(customTax || null);
    },
    [customTax]
  );

  useEffect(() => {
    loadConversionRates();
  }, [loadConversionRates]);

  return (
    <div className="App">
      <Dimmer active={isLoading}>
        <Loader />
      </Dimmer>

      <Container>
        <Header as="h1">Calculadora de impuestos aduanales</Header>

        <Segment>
          <Form>
            <Form.Field>
              <Label>Categoría de articulo</Label>
              <Dropdown
                placeholder="Ejemplo: Celulares, DVD, etc."
                search
                clearable
                selection
                options={dropdownOptions}
                onChange={changeCustomTaxDropdown}
              />
            </Form.Field>
            <Form.Field>
              <Label>Costo (USD)</Label>
              <Input placeholder="Ejemplo: 12.00" />
            </Form.Field>
            <Form.Field>
              <Label>Tasa de cambio (USD a DOP)</Label>
              <Input
                placeholder="Ejemplo: 57.00"
                loading={isLoading}
                disabled
                value={conversionRate}
              />
            </Form.Field>
            <Form.Field>
              <Label>Peso de articulo (en libras)</Label>
              <Input placeholder="Ejemplo: 1" />
            </Form.Field>
            <Form.Field>
              <Label>Precio por libras (en DOP)</Label>
              <Input placeholder="Ejemplo: 257.00"/>
            </Form.Field>
          </Form>
        </Segment>

        {customTax && (
          <Segment>
            <CustomTaxTable customTax={customTax} />
          </Segment>
        )}

        <Segment>
          
</Segment>
      </Container>
    </div>
  );
}

export default App;
