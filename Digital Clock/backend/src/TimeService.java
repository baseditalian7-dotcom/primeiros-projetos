import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

public class TimeService {
    private final ZoneId zoneId;

    public TimeService() {
        this.zoneId = ZoneId.systemDefault();
    }

    public String getCurrentTime() {
        LocalDateTime now = LocalDateTime.now(zoneId);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");
        return now.format(formatter);
    }

    public String getCurrentDate() {
        LocalDateTime now = LocalDateTime.now(zoneId);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        return now.format(formatter);
    }

    public String getTimezone() {
        return zoneId.toString();
    }
}
