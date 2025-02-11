using StandardNotesApi.Middlewares;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseCors(options =>
    options.WithOrigins("*")
        .AllowAnyHeader()
        .AllowAnyMethod());

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.UseTimeoutMiddleware(1000);
app.UseRandomErrorsMiddleware(0.1);

app.Run();
