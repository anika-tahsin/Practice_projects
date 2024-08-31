type Dictionary<T> = Record<string, T>

interface JSON {
  parse<T>(text: string): T
}

type Security = Array<{
  [securityLabel: string]: string[]
}>

interface MultipartFile {
  buffer: Buffer
  filename: string
  encoding: string
  mimetype: string
}
