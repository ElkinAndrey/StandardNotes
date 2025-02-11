namespace StandardNotesApi.Middlewares
{
    public class TimeoutMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly int _delay = 0;

        public TimeoutMiddleware(RequestDelegate next, int delay = 0)
        {
            _next = next;
            _delay = delay;
        }

        public async Task Invoke(HttpContext context)
        {
            await Task.Delay(_delay);
            await _next.Invoke(context);
        }
    }
}
