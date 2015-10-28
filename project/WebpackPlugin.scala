package com.typesafe.sbt.webpack

import sbt._
import com.typesafe.sbt.web.{PathMapping, SbtWeb}
import com.typesafe.sbt.web.js.JS
import com.typesafe.sbt.web.pipeline.Pipeline
import sbt.Keys._
import sbt.Task

object Import {

  val webpack = TaskKey[Pipeline.Stage]("webpack", "Invoke the webpack module bundler.")

  object WebpackKeys {
    val outputPath = TaskKey[String]("webpack-output-path", "Path to the generated asset file.")
  }

}

object SbtWebpack extends AutoPlugin {

  override def requires = SbtWeb

  override def trigger = AllRequirements

  val autoImport = Import

  import SbtWeb.autoImport._
  import WebKeys._
  import autoImport._
  import WebpackKeys._

  override def projectSettings = Seq(
    outputPath := "webpack",
    webpack := webpackStage.value
  )

  def webpackStage: Def.Initialize[Task[Pipeline.Stage]] = Def.task { mappings =>
    val rc = Process("npm run build release", file(".")).!
    if (rc != 0) {
      sys.error(s"NPM generated non-zero return code: $rc")
    }

    val outputDir = target.value / outputPath.value
    val outputFiles = outputDir ** "*.*"
    val newMappings = outputFiles pair relativeTo(outputDir)

    // Replace existed ones
    val newNames = newMappings map (_._2)
    val (existed, other) = mappings partition (newNames contains _._2)
    
    newMappings ++ other
  }
}
