package org.apache.olingo.server.sample.data;

public class Cars {
	private int Identificador;
	private String Model;
	private String ModelYear;
	private float Price;
	private String Currency;

	

	public int getIdentificador() {
		return Identificador;
	}

	public void setId(int Identificador) {
		this.Identificador = Identificador;
	}

	public String getModel() {
		return Model;
	}

	public void setModel(String model) {
		Model = model;
	}

	public String getModelYear() {
		return ModelYear;
	}

	public void setModelYear(String modelYear) {
		ModelYear = modelYear;
	}

	public float getPrice() {
		return Price;
	}

	public void setPrice(float price) {
		Price = price;
	}

	public String getCurrency() {
		return Currency;
	}

	public void setCurrency(String currency) {
		Currency = currency;
	}

	@Override
	public String toString() {
		return "Car [id=" + Identificador + ", Model=" + Model + "]";
	}

}