import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/EventDetails")
public class EventDetailsServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        // Retrieve form data submitted by the user
        String eventName = request.getParameter("eventName");
        String eventDate = request.getParameter("eventDate");
        String eventLocation = request.getParameter("eventLocation");
        String eventDescription = request.getParameter("eventDescription");

        // Set response content type to HTML
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        // Generate HTML response to display the entered details
        out.println("<!DOCTYPE html>");
        out.println("<html><head><title>Event Details</title>");
        out.println("<style>");
        out.println("body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #09090b; padding: 40px; color: #f8fafc; }");
        out.println(".container { background: #18181b; padding: 30px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.5); max-width: 500px; margin: auto; }");
        out.println("h2 { color: #8b5cf6; margin-top: 0; }");
        out.println("p { font-size: 16px; color: #e2e8f0; line-height: 1.6; }");
        out.println("strong { color: #06b6d4; }");
        out.println(".back-link { display: inline-block; margin-top: 20px; color: #ec4899; text-decoration: none; font-weight: bold; }");
        out.println(".back-link:hover { text-decoration: underline; }");
        out.println("</style></head><body>");
        
        out.println("<div class='container'>");
        out.println("<h2>Event Registered Successfully</h2>");
        out.println("<p><strong>Event Name:</strong> " + eventName + "</p>");
        out.println("<p><strong>Date:</strong> " + eventDate + "</p>");
        out.println("<p><strong>Location:</strong> " + eventLocation + "</p>");
        out.println("<p><strong>Description:</strong> " + eventDescription + "</p>");
        out.println("<a href='index.html' class='back-link'>&larr; Go Back to Form</a>");
        out.println("</div>");
        
        out.println("</body></html>");
    }
}
