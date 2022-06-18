import io.restassured.specification.RequestSpecification;

public class Teste {
    private RequestSpecification requestSpecification;


    //@When("^envio a solicitacao health$")
    public void envio_a_solicitacao_health() throws Throwable {
        System.setProperty("https.protocols", "TLSv1,TLSv1.1,TLSv1.2");
        this.requestSpecification.relaxedHTTPSValidation();
    }
}
