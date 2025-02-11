namespace StandardNotesApi.Middlewares
{
    public class RandomErrorsMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly double _chance = 0;

        public RandomErrorsMiddleware(RequestDelegate next, double chance = 0)
        {
            _next = next;
            _chance = chance;
        }

        public async Task Invoke(HttpContext context)
        {
            Random random = new Random();
            if (random.NextDouble() < _chance) throw new Exception();
            await _next.Invoke(context);
        }
        
    }
}
