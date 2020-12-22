import ModuleA from './ModuleA'

interface Library {
  moduleA: ModuleA
}

const library: Library = {
  moduleA: new ModuleA()
}

export default library
