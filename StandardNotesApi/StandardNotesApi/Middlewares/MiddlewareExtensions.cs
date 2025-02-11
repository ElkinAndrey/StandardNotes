namespace StandardNotesApi.Middlewares
{
    public static class MiddlewareExtensions
    {
        public static void UseRandomErrorsMiddleware(this IApplicationBuilder app, double chance = 0)
        {
            app.UseMiddleware<RandomErrorsMiddleware>(chance);
        }

        public static void UseTimeoutMiddleware(this IApplicationBuilder app, int delay = 0)
        {
            app.UseMiddleware<TimeoutMiddleware>(delay);
        }
    }
}
