package exception;

public class NonBookableException extends Exception{
    public NonBookableException(String message) {
        super(message);
    }
}
