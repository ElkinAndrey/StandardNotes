using System.Text.Json.Serialization;
using System.Text.Json;

namespace StandardNotesApi.JsonConverters
{
    public class GuidJsonConverter : JsonConverter<Guid>
    {
        public override Guid Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            string value = reader.GetString()!;
            if (Guid.TryParse(value, out var guidValue))
                return guidValue;
            return Guid.Empty;
        }

        public override void Write(
            Utf8JsonWriter writer,
            Guid value,
            JsonSerializerOptions options) =>
                writer.WriteStringValue(value.ToString());
    }
}
