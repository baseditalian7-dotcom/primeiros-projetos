public class Main {
    public static void main(String[] args) {
        TimeService timeService = new TimeService();

        System.out.println("Digital Clock - Backend Java");
        System.out.println("----------------------------");
        System.out.println("Horário: " + timeService.getCurrentTime());
        System.out.println("Data: " + timeService.getCurrentDate());
        System.out.println("Fuso horário: " + timeService.getTimezone());
    }
}
