name := "play-webpack-react"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava, SbtWeb)

scalaVersion := "2.11.7"

libraryDependencies ++= Seq(
)

// Play provides two styles of routers, one expects its actions to be injected, the
// other, legacy style, accesses its actions statically.
routesGenerator := InjectedRoutesGenerator

val webpackDev = taskKey[Unit]("webpack-dev")

webpackDev := {
  val rc = Process("npm run build", file(".")).!
  if (rc != 0) {
    sys.error(s"NPM generated non-zero return code: $rc")
  }
  println("webpackDev")
}

run in Compile <<= (run in Compile) dependsOn webpackDev

pipelineStages := Seq(webpack, digest, gzip)
