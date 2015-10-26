name := "play-webpack-react"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava, SbtWeb)

scalaVersion := "2.11.7"

libraryDependencies ++= Seq(
)

// Play provides two styles of routers, one expects its actions to be injected, the
// other, legacy style, accesses its actions statically.
routesGenerator := InjectedRoutesGenerator

val webpackTask = taskKey[Seq[File]]("Webpack build")

webpackTask := {
  val sourceDir = target.value / "webpack"
  val sources = sourceDir ** "*.*"
  val mappings = sources pair relativeTo(sourceDir)
  mappings map (_._1)
}

resourceGenerators in Assets <+= webpackTask
managedResourceDirectories in Assets += target.value / "webpack"

pipelineStages := Seq(digest, gzip)
